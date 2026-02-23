import { useRoute } from 'vue-router'
import { headers } from '@/config'

export function useHeader() {
  const route = useRoute()
  return (
    headers[route.name as string] ?? {
      title: '',
      description: '',
    }
  )
}
