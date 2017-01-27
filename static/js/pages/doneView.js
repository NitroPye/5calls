const html = require('choo/html');

const sidebar = require('../components/sidebar.js');
const done = require('../components/done.js');

module.exports = (state, prev, send) => {
  return html`
    <div id="root" class="layout container">
	    <div class="row header">
        <h1 class="txt-DSAwhite"><strong>Seattle DSA Call to Action</strong> <small class="txt-DSAgray">The revolution starts now.</small></h1>
      </div>
	    <div class="row bg-DSAglass">
	      ${sidebar(state, prev, send)} 
	      ${done(state, prev, send)}
	    </div>
    </div>
  `;
}
