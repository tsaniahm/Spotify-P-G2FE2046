import * as reactRedux from 'react-redux'


describe('test suite', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    it('test reducer for the accessToken', () => {
        const dummyDispatch = jest.fn()
        useSelectorMock.mockReturnValue(dummyDispatch)
        useDispatchMock.mockReturnValue(dummyDispatch)


        expect(dummyDispatch).not.toHaveBeenCalled()

    })

    //   it('render', () =>{
    //       const header = screen.getByText('Create & Manage your Spotify Playlist')
    //       expect(header).toBeInTheDocument()
    //   })
})