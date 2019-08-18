// Bring in the necessary functional components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Import the Navigo constructor fxn. from the node module called 'navigo.'
import Navigo from 'navigo';
import axios from 'axios';

/**
 * location.origin provides the 'base' URL for Navigo to get started.
 * new creates a new instance of Navigo from it's constructor fxn.
 */
const router = new Navigo(location.origin);

// Describes the current STATE of our SPA. We say that we pass 'pieces of state.'
// TODO: Refactor 'store' into its own folder and `import`
const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'This is the home page!',
        'page': `
        <section>
        <h2>Hyacinth Flood</h2>
        <p> “You ready?” She asked. <br>
            "Yeah, let’s go.” I said. <br>
            Even though all she had on was a loose T-shirt, sweat pants and a beat up pair of sneakers, she still radiated, a star in cotton clothes. Her eyes, her smile, her energy was all encompassing.
            <p>None of this bothers us because we see children playing basketball in the park, an entrepreneur is selling barbeque on the lot of a chop suey restaurant. Old men are talking and laughing.</p>
            <a href="#"class="cta-btn">Read More!</a>
        </section>

        <section>
          <h2>Choke Slam Journalism</h2>
          <p>Journalists are getting assaulted to get the story. Benjamin Jacobs of the Guardian gets body slammed and punched by literal anus Greg Gianforte.
          <p>After Jacobs asks Gianforte about the new health care bill, the conversation went delightfully like this,</p>
          <a href="#"class="cta-btn">Read More!</a>
        </section>

        <section>
            <h2>Ambrosial</h2>
            <p>Now reality is aggrandized beyond fantastic phantasms of fantasy, because he has ascertained pleasure more immense than the ambrosial halls of the immortals relaxed in the pleasure of eternal contemplation.</p>
            <p>And by the way, Hey Jenn!</p>
            <a href="#" class="cta-btn">Read More!</a>
        </section>`
    },
    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur ullam libero dolorum in nobis quo similique, culpa saepe quod, error aspernatur repellat consequuntur sequi iure ratione? Aut, consectetur aliquid?</p>
        `
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': `
            <form action="form-responses/new" method="POST" netlify>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          autofocus
          required
        />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input
          type="email"
          name="userEmail"
          placeholder="your.email@example.com"
        />
        <p>What's this message about?</p>
        <div class="input-group">
          <span>
            <!-- Generally, the 'for' attribute on <label> should match the 'id' of an <input>.
          Radio button 'groups' need to have the same 'name' attribute value so that the server can properly interpret the results. -->
            <input
              type="radio"
              name="subject"
              value="professional"
              id="pro"
              checked
            />
            <label for="pro">I'd like to hire you!</label>
          </span>
          <span>
            <input type="radio" name="subject" value="personal" id="personal" />
            <label for="personal">Personal message</label>
          </span>
          <span>
            <input type="radio" name="subject" value="other" />
            <label>Don't know/something else</label>
          </span>
        </div>
        <div class="input-group">
          <input
            type="checkbox"
            name="optin"
            value="trusting"
            checked
          />Subscribe me to your newsletter!
          <input
            type="checkbox"
            name="optout"
            value="skeptical"
            disabled
          />Cheeky checkbox...
        </div>
        <div class="input-group input-group--flex">
          <label for="marketing">How did you hear about me?</label>
          <select name="marketing" id="marketing">
            <optgroup label="Online">
              <option value="social"
                >Social Media (FB, Twitter, LinkedIn)</option
              >
              <option value="github">Online Portfolio (GitHub)</option>
              <option value="search">Search Engine</option>
              <option value="email">Email</option>
            </optgroup>
            <optgroup label="In-Person">
              <option value="networking">We met at a networking event</option>
              <option value="referral">Personal referral</option>
              <option value="random">We met somewhere else</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="input-group--flex">
          <textarea name="user_message" rows="8" cols="40"></textarea>
          <div>
            <input type="submit" />
            <input type="reset" value="Reset" />
          </div>
        </div>
      </form>
        `
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Blog Page',
        'page': `
        <p>Loading blog posts!</p>
        `
    }
};

function render(state){
    // We use function invocation that actually runs the fxn. and then `returns` the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;

    // updatePageLinks() works in conjunction with 'data-navigo' and the <a href>s found in the Navigation functional component.
    router.updatePageLinks(); // Replaces our custom click event listeners with the recursive render.
}

// To render a page, we pass in a piece of state.
render(store.home);

/**
 * .on is a Navigo method that behaves as any event listener might.
 * It 'listens' to location.pathname and responds accordingly
 *
 * https://github.com/krasimir/navigo#parameterized-urls
 *
 * Whatever comes in as 'location.pathname',
 * 'save' that in the 'params' object under the 🔑 'page.'
 *
 * resolve() is a 'navigo' method that triggers the 'routing' to happen using `on()`'s cb fxn. (https://www.npmjs.com/package/navigo#resolving-the-routes)
 */
router
    .on(':view', (params) => {
        render(store[params.view]);
    })
    .resolve();

axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    const blogPosts = response.data;

    // blogPosts is an `Array` of Object Literals
    const blogHTML = blogPosts
        .map(
            (blogPost) => `
          <section>
          <h2>${blogPost.title}</h2>
          <p>${blogPost.body}</p>
          </section>
        `
        )
        .join(' ');

    store.blog.page = blogHTML;
});
