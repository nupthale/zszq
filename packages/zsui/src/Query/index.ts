import InlineQuery from './InlineQuery/index.vue';
import SideQuery from './SideQuery/index.vue';
import QueryTags from './QueryTags/index.vue';
import GridQuery from './GridQuery/index.vue';

import { componentMap, regsiter, unregister } from './componentMap';

const queryComponent = {
    componentMap,
    regsiter, 
    unregister,
};

export { InlineQuery, SideQuery, QueryTags, GridQuery, queryComponent };