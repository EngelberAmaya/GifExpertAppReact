import GifGrid from "../../components/GifGrid";
import {shallow} from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category= 'Avengers';

    test('Debe de mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
  
})
