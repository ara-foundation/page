import { server as starActions } from './star'
import { server as roadmapActions } from './roadmap'
import { server as personalizationActions } from './personalization'
import { server as blogActions } from './blog'

export const server = {
    ...starActions,
    ...roadmapActions,
    ...personalizationActions,
    ...blogActions,
}

