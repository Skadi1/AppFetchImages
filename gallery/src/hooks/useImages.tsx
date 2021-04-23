import { useCallback, useState } from "react"
import { UrlsT } from '../types/types';
//
type CallbackType = (query: string) => Promise<UrlsT[]>

//
const UNSPLASH_SECRET_KEY = 'Client-ID 1szNcwKp725ErT2zhXR8q9Cb_q9sW0UYHAy90bcX75I'
//
export const useImages = () => {
    const [urls, setUrls] = useState<UrlsT[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchImages = useCallback<CallbackType>(async (query: string) => {
        setLoading(true)
        let fetchUrl = getQuery(query)
        const res = await fetch(fetchUrl,
            {
                method: 'GET',
                headers: {
                    Authorization: UNSPLASH_SECRET_KEY
                }
            })
        const data = await res.json()
        const formatedUrls: UrlsT[] = data.results.map((image: any) => {
            return image.urls.small
        })

        setUrls(formatedUrls)
        setLoading(false)

        return formatedUrls
    }, [])
    const getQuery = (query: string): string => {
        const URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${query}>; rel="first"`
        return URL
    }
    return { loading, urls, fetchImages }

}