import AddCategory from '../../components/AddCategory';
import {shallow} from 'enzyme';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
      
    }); 
    
    // test('Debe cambiar la caja de texto', () => {

    //     const input =  wrapper.find('input');
    //     const value = 'Hola Mundo';

    //     input.simulate('change', {
    //         target: { 
    //             value: value
    //         }
    //     });

    //     expect(wrapper.find('p').text().trim()).toBe(value);
      
    // });

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
      
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';

        // simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        //simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);

        //el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
      
    })
    
    
  
})
