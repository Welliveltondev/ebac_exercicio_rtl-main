import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar "que legal" no comentario', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTextId('campo-texto'), {
            target: {
                value: 'que legal'
            }
        })
        fireEvent.click(screen.getByTextId('btn-submit'))
        expect(screen.getByText('que legal')).toBeInTheDocument()
    })

    test('Deve adicionar "que legal" no comentario', () => {
        const {debug} = render(<PostComment />)
        fireEvent.change(screen.getByTextId('campo-texto'), {
            target: {
                value: 'que massa'
            }
        })
        fireEvent.click(screen.getByTextId('btn-submit'))
        debug()
        expect(screen.getByText('que massa')).toBeInTheDocument()
    })
});
