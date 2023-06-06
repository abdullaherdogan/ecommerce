import axios from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRequest = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState()
	axios.interceptors.response.use(
		(response) => {
			return response
		},
		(err) => {
			setError(err)
			if (err.response?.status === 401) {
                navigate('/401')
			}
			if (err.response?.status === 404) {
                navigate('/404')
			}
			if (err.response?.status === 500) {
				navigate('/500')
			}
			if (err.response?.status === 400) {
				navigate('/400')
			}
		}
	)
	const apiUrl = process.env.REACT_APP_API_ENDPOINT

	//console.log("authToken", authToken);

	axios.defaults.baseURL = apiUrl

	const request = useCallback(async (url, options = {}) => {
		setLoading(true)
		options.headers = {
			'Content-Type': 'application/json',
			...options.headers,
		}
		options.data = options.data ? options.data : { ...options.body }
		const response = await axios(url, options).finally(() => setLoading(false))
		return response
	}, [])
	return [request, loading, error]
}
