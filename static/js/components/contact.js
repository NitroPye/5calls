const html = require('choo/html');
const find = require('lodash/find');

module.exports = (c, state, prev, send) => {
  const photoURL = c.photoURL == "" ? "/img/generic-small.png" : c.photoURL;
  const reason = c.reason == "" ? "This organization is related to the issue." : c.reason;

  repID = ""
  if (c.party != "") {
    repID = c.party.substring(0,1) + "-" + c.state;
  }

	return html`
      <div class="call__contact">
        <h3 class="call__contact__type"><strong>Call this office:</strong></h3>
        <div class="row">
          <div class="call__contact__image col-md-3 col-xs-4"><img src="${photoURL}" class="img-responsive" /></div>
          <div class="col-md-9 col-xs-8">
            <h4 class="call__contact__name">${c.name} ${repID}</h4>
            <h4 class="call__contact__phone"><a href="tel:${c.phone}">${c.phone}</a></h4>
          </div>
        </div>
        <h3 class="call__contact__reason"><strong>Why you're calling this office:</strong></h3>
        <p>${reason}</p>
      </div>
	`;
}