import { server as starActions } from './star'
import { server as blogActions } from './blog'

export const server = {
    ...starActions,
    ...blogActions,
}

