import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    });

    test('Debe tener un párrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
      
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
      
    });

    test('Debe de tener animate__backInDown', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__backInDown')).toBe(true);
      
    })
    
    
    
  
})
