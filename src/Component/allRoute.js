import About from './About';
import Cart from './Cart';
import Logout from './Logout';
import Privacy from './Privacy';
import Cookie from './Cookie';
import Winner from './Winner';
import Ticket from './Ticket';
import Welcome from './Welcome';
import Terms from './Terms';
import Contact from './Contact';

var allRoute = [
    { path: "/about", component: About },
    { path: "/cart", component: Cart },
    { path: "/privacy", component: Privacy },
    { path: "/cookie-policy", component: Cookie },
    { path: "/privacy-policy", component: Privacy },
    { path: "/winner", component: Winner },
    { path: "/logout", component: Logout },
    { path: "/contact", component: Contact },
    { path: "/ticket", component: Ticket },
    { path: "/terms", component: Terms },
    { path: "/", component: Welcome },

];
export default allRoute;