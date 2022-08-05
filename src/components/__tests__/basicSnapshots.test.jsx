import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../header';
import Footer from '../footer';
import ErrorDialog from '../ErrorDialog';

Enzyme.configure({ adapter: new Adapter() });

describe('BasicRendering of Components', ()=>{
    it('header renders ok', ()=>{
        const wrapper = Enzyme.shallow(<Header />);
        expect(wrapper).toMatchSnapshot(); //The first time you run this test, jest is going to generate an snapshot automatically.
    });

    it('footer renders ok', ()=>{
        const wrapper = Enzyme.shallow(<Footer />);
        expect(wrapper).toMatchSnapshot(); //The first time you run this test, jest is going to generate an snapshot automatically.
    });

    it('ErrorDialog renders ok', ()=>{
        const wrapper = Enzyme.shallow(<ErrorDialog isOpen={true} message={"Error Message"} />);
        expect(wrapper).toMatchSnapshot(); //The first time you run this test, jest is going to generate an snapshot automatically.
    });
});