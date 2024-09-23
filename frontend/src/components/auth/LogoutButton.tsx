import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { AppDispatch, RootState } from '@/store/Store'
import { logOutUser } from '@/store/slices/auth/authSlice'

const LogoutButton = () => {
    const {isLoading} = useSelector((state : RootState) => state.authSlice)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = () => {
        dispatch(logOutUser())
    }

  return (
    <Button onClick={() => handleLogout()}>{isLoading ? "Loading..." : "Logout"}</Button>
  )
}

export default LogoutButton