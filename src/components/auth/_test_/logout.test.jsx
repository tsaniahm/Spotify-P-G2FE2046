import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import Logout from '../logout'


describe('Logout Test', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    it('test reducer for the accessToken', () => {
        const dummyDispatch = jest.fn()
        useSelectorMock.mockReturnValue(dummyDispatch)
        useDispatchMock.mockReturnValue(dummyDispatch)

        expect(dummyDispatch).not.toHaveBeenCalled()

    })

    it('test the Logout Button', () => {
        render(<Logout />)
        const logout = screen.getByText(/LOGOUT/i);

        // fireEvent.click(logout);

        expect(logout).toBeInTheDocument();
    })
})