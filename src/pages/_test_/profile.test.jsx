import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'


  describe('TEST PROFILE PAGE', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    it('test reducer for the accessToken', () => {
        const dummyDispatch = jest.fn()
        useSelectorMock.mockReturnValue(dummyDispatch)
        useDispatchMock.mockReturnValue(dummyDispatch)
        

        expect(dummyDispatch).not.toHaveBeenCalled()
        
      })

      it('test', () => {
        render(<div>
            <p>PROFILE</p>
        </div>)
        const title = screen.getByText(/PROFILE/i);
        expect(title).toBeInTheDocument();
      })
  })