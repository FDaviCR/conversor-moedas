import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('Teste de componente de listagem de moedas', () =>{

    it('Deve renderizar o componente', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})