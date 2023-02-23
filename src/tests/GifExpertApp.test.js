import GifExpertApp from "../GifExpertApp";
import {shallow} from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {

    
    test('Debe de mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
      
    })

    // test('Debe de mostrar una lista de categorias', () => {

    //     const categories = ['Avengers', 'X men'];
    //     const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    //     expect(wrapper).toMatchSnapshot();
    //     expect(wrapper.find('GifGrid').length).toBe(categories.length)
      
    // })    
    
  
})
