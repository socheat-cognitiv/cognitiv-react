import reducer from '../../reducers/index';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                user: {
                    auth_token: false, 
                    expiration_date: false, 
                    private_key: false, 
                    public_key: false, 
                    remember_me: false, 
                    user_id: false, 
                    user_type: false
                },
                partners: [],
                campaigns: [],
                advertisers: []
            }
        )
    })
})