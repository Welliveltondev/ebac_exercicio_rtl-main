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
        fireEvent.change(screen.getByTestId('campo-texto'), {
            target: {
                value: 'que legal'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('que legal')).toBeInTheDocument()
    })

    test('Deve adicionar "que massa" no comentario', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-texto'), {
            target: {
                value: 'que massa'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit'))
        expect(screen.getByText('que massa')).toBeInTheDocument()
    })
});


