angular.module('nbApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/404.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The page you were looking for doesn't exist (404)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/404.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The page you were looking for doesn't exist.</h1>\n" +
    "    <p>You may have mistyped the address or the page may have moved.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/422.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>The change you wanted was rejected (422)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/422.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>The change you wanted was rejected.</h1>\n" +
    "    <p>Maybe you tried to change something you didn't have access to.</p>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/500.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>We're sorry, but something went wrong (500)</title>\n" +
    "  <style>\n" +
    "  body {\n" +
    "    background-color: #EFEFEF;\n" +
    "    color: #2E2F30;\n" +
    "    text-align: center;\n" +
    "    font-family: arial, sans-serif;\n" +
    "  }\n" +
    "\n" +
    "  div.dialog {\n" +
    "    width: 25em;\n" +
    "    margin: 4em auto 0 auto;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-left-color: #999;\n" +
    "    border-bottom-color: #BBB;\n" +
    "    border-top: #B00100 solid 4px;\n" +
    "    border-top-left-radius: 9px;\n" +
    "    border-top-right-radius: 9px;\n" +
    "    background-color: white;\n" +
    "    padding: 7px 4em 0 4em;\n" +
    "  }\n" +
    "\n" +
    "  h1 {\n" +
    "    font-size: 100%;\n" +
    "    color: #730E15;\n" +
    "    line-height: 1.5em;\n" +
    "  }\n" +
    "\n" +
    "  body > p {\n" +
    "    width: 33em;\n" +
    "    margin: 0 auto 1em;\n" +
    "    padding: 1em 0;\n" +
    "    background-color: #F7F7F7;\n" +
    "    border: 1px solid #CCC;\n" +
    "    border-right-color: #999;\n" +
    "    border-bottom-color: #999;\n" +
    "    border-bottom-left-radius: 4px;\n" +
    "    border-bottom-right-radius: 4px;\n" +
    "    border-top-color: #DADADA;\n" +
    "    color: #666;\n" +
    "    box-shadow:0 3px 8px rgba(50, 50, 50, 0.17);\n" +
    "  }\n" +
    "  </style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "  <!-- This file lives in public/500.html -->\n" +
    "  <div class=\"dialog\">\n" +
    "    <h1>We're sorry, but something went wrong.</h1>\n" +
    "  </div>\n" +
    "  <p>If you are the application owner check the logs for more information.</p>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('/templates/_create_note.html',
    "<div class=\"create-note\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h1 class='text-center'>\n" +
    "      <span class='thin'>CREATE A NOTE</span>\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"cancel()\">×</button>\n" +
    "    </h1>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">\n" +
    "      Create your note here. If successful, you will be redirected to a confirmation page.\n" +
    "      See <a href=\"/how-it-works\">how it works.</a>\n" +
    "    </p>\n" +
    "    <br>\n" +
    "    <form class=\"form-horizontal\" name=\"form.noteForm\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-2 control-label h3 thin\">TO EMAIL: </label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "          <input\n" +
    "          tabindex=\"1\"\n" +
    "          type=\"email\"\n" +
    "          name=\"email\"\n" +
    "          class=\"form-control\"\n" +
    "          ng-model=\"note.email\"\n" +
    "          placeholder=\"(optional)\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-2 control-label h3 thin\">NOTE: </label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "          <div ng-show=\"form.noteForm.content.$error.maxlength\">\n" +
    "            Must be &lt;= 136 characters\n" +
    "          </div>\n" +
    "          <textarea\n" +
    "            tabindex=\"2\"\n" +
    "            class='form-control'\n" +
    "            name=\"content\"\n" +
    "            placeholder=\"136 characters or less\"\n" +
    "            ng-maxlength=\"136\"\n" +
    "            ng-model=\"note.content\"\n" +
    "            rows=\"4\"\n" +
    "          ></textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-2 control-label h3 thin\">FROM: </label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "          <div ng-show=\"form.noteForm.sender.$invalid\">\n" +
    "            Must be &lt;= 50 characters\n" +
    "          </div>\n" +
    "          <input\n" +
    "            tabindex=\"3\"\n" +
    "            type=\"text\"\n" +
    "            name=\"sender\"\n" +
    "            class=\"form-control\"\n" +
    "            ng-maxlength=\"50\"\n" +
    "            ng-model=\"note.sender\"\n" +
    "            placeholder=\"(optional)\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button tabindex=\"4\" class=\"btn btn-primary\" ng-click=\"create()\">CREATE</button>\n" +
    "    <button class=\"btn btn-default\" ng-click=\"cancel()\">CANCEL</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/_navbar.html',
    "<div class=\"navbar navbar-inverse\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"/\">\n" +
    "        <span ng-non-bindable>\n" +
    "          The Noteblock\n" +
    "        </span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li>\n" +
    "          <a href=\"https://www.github.com/BitcoinMafia/noteblock\" target=\"_blank\">\n" +
    "            <i class=\"fa fa-code\"></i>\n" +
    "            <span>Source Code</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li\n" +
    "          ng-class=\"{'active': global.isOnLink('/docs')}\">\n" +
    "          <a href=\"/how-it-works\">\n" +
    "            <i class=\"fa fa-info-circle\"></i>\n" +
    "            <span>How it Works</span>\n" +
    "          </a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <span class='what'>\n" +
    "            <a class=\"btn btn-info\" ng-click=\"What.open()\">\n" +
    "              What is this?\n" +
    "            </a>\n" +
    "          </span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div><!-- /.nav-collapse -->\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/_what.html',
    "<div class=\"create-note\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h1 class='text-center'>\n" +
    "      <span class='thin'>WHAT IS THIS?</span>\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "    </h1>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <p class=\"lead\">\n" +
    "      <span class=\"h1 thin\">Hello, </span>\n" +
    "      the Noteblock was created to forever embed your love for someone into the Blockchain, whilst simultaneously sending them some Bitcoins.\n" +
    "    </p>\n" +
    "\n" +
    "    <p class=\"lead\">\n" +
    "      Why not try something unique this Valentine’s day, because roses will wither, but the Blockchain is forever ...\n" +
    "    </p>\n" +
    "\n" +
    "    <p class=\"lead pull-right\">\n" +
    "      From scott@helloblock.io\n" +
    "    </p>\n" +
    "    <br>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">CLOSE</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/claim.html',
    "<div class=\"claim-content text-center row\">\n" +
    "  <div class=\"col-md-6 col-md-offset-3\">\n" +
    "    <br><br>\n" +
    "    <section>\n" +
    "      <p class='super-lead'>\n" +
    "        Hey there {{note.name}} :)\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <br>\n" +
    "    <section>\n" +
    "      <p class=\"super-lead\">\n" +
    "        If you are reading this, it means a special someone has sent you <span to-btc=\"{{note.remaining_balance}}\"></span> Bitcoins for Valentine's Day.\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <br>\n" +
    "    <section>\n" +
    "      <p class=\"super-lead\">\n" +
    "        <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=Um63OQz3bjo\">What are Bitcoins anyway?</a>\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <br>\n" +
    "    <section>\n" +
    "      <p class=\"super-lead\">\n" +
    "        A personal note was also left for you, but this is no ordinary note. This note has been forever embedded into human history as it was included in the Blockchain.\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <br>\n" +
    "    <blockquote>\n" +
    "      <p class='claim-note'>\n" +
    "        \"{{note.content}}\"\n" +
    "      </p>\n" +
    "      <p class=\"claim-note\">\n" +
    "        <small>\n" +
    "          {{note.sender}}\n" +
    "        </small>\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <section>\n" +
    "      <p class=\"super-lead\">\n" +
    "        You can see the whole thing <a href=\"/notes/{{note.id}}\">here</a>. Here's <a href=\"/how-it-works\">how it works.</a>\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <section class='visible-xs'>\n" +
    "      <p class=\"super-lead\">\n" +
    "        To claim your Bitcoins, please view this webpage in a Browser.\n" +
    "      </p>\n" +
    "    </section>\n" +
    "    <br>\n" +
    "    <div class='hidden-xs'>\n" +
    "      <section>\n" +
    "        <p class=\"super-lead\">\n" +
    "          This page is a unique URL only available to you. To claim your Bitcoins, enter your address below and we will send you balance. If you're not sure how this works, checkout <a target=\"_blank\" href=\"https://coinbase.com\">Coinbase.com</a> or <a target=\"_blank\" href=\"https://coinjar.com\">Coinjar.io</a>\n" +
    "        </p>\n" +
    "      </section>\n" +
    "      <br>\n" +
    "      <div class='claim-box'>\n" +
    "        <div ng-show=\"claimErrors.encrypted_token\" class=\"alert alert-danger text-center\">\n" +
    "          <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "          <span class=\"h4 thin\">\n" +
    "            This wasn't meant for you!\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div ng-show=\"claimErrors.withdraw\" class=\"alert alert-danger text-center\">\n" +
    "          <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "          <span class=\"h4 thin\">\n" +
    "            Sorry, something went wrong :( Please e-mail scott@helloblock.io\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div ng-show=\"claimErrors.address\" class=\"alert alert-danger text-center\">\n" +
    "          <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "          <span class=\"h4 thin\">\n" +
    "            Not a valid Bitcoin Address :(\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div ng-show=\"claimSuccess\" class=\"alert alert-success text-center\">\n" +
    "          <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "          <span class=\"h4 thin\">\n" +
    "            Success! You will receive the Bitcoins very shortly. Contact scott@helloblock.io if there are any problems.\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <form name=\"claimForm\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <input\n" +
    "                type=\"text\"\n" +
    "                class='form-control square'\n" +
    "                required\n" +
    "                ng-model=\"to_address\"\n" +
    "                validate-address=\"{{to_address}}\">\n" +
    "              <button class=\"btn btn-success\" type=\"button\" ng-click=\"claim()\" ng-class=\"{'btn-warning': claiming}\">CLAIM<span ng-show=\"claiming\">ING ...</span></button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br><br>\n" +
    "    <br><br>\n" +
    "    <br><br>\n" +
    "    <br><br>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/confirm.html',
    "<div class=\"container\">\n" +
    "  <br>\n" +
    "  <h1 class='text-center'>CONFIRMATION</h1>\n" +
    "  <br>\n" +
    "  <div class=\"col-md-10 col-md-offset-1\">\n" +
    "    <blockquote>\n" +
    "      <div class=\"h2 thin\">\n" +
    "        Please confirm your note by sending any amount of BTC (> 0.001) to the following address. Once received, 0.0005 BTC will be used to forever embed your note into the Blockchain. The remaining balance will then be sent to your recipient via e-mail. See <a href=\"/how-it-works\">how this works.</a>\n" +
    "      </div>\n" +
    "    </blockquote>\n" +
    "    <h1 class='text-center'>{{note.address}}</h1>\n" +
    "    <br>\n" +
    "    <table class=\"table table-striped table-confirm\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\">NOTE:</span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2 thin\">\n" +
    "              {{note.content}}\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\">FROM:</span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2 thin\">\n" +
    "              {{note.sender}}\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\">STATUS:</span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2\">\n" +
    "              <span class=\"label label-primary\" ng-class=\"{dim: note.payment_valid}\">WAITING</span>\n" +
    "              <span class=\"label label-success\" ng-class=\"{dim: !note.payment_valid}\">RECEIVED</span>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>\n" +
    "            <span class=\"h2\">URL:</span>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <div class=\"h2 thin\">\n" +
    "              <a href=\"/notes/{{note.id}}\">http://www.thenoteblock.com/notes/{{note.id}}</a>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/how-it-works.html',
    "<h1 class='text-center thin'>\n" +
    "  How It Works\n" +
    "</h1>\n" +
    "<br>\n" +
    "<div class=\"row how-it-works\">\n" +
    "  <div class=\"col-md-8 col-md-offset-2\">\n" +
    "    <h2 class='text-center'>How do I send a love note?</h2>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        1. Create a love note using “Create Note”. The e-mail and from fields are optional, but you must write a note no longer than 136 characters.\n" +
    "      </p>\n" +
    "      <p class='text-center img-wrapper'>\n" +
    "        <img src=\"http://i.imgur.com/X6ytvdl.png\">\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        2. Once created, send any amount of Bitcoins (minimum 0.001 BTC) to the address specified to confirm the note.\n" +
    "      </p>\n" +
    "      <p class='text-center img-wrapper'>\n" +
    "        <img src=\"http://i.imgur.com/zSxj4j2.png\">\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        3. Once the payment is received, The Noteblock will build and propagate the transaction with the note embedded. 0.0005 BTC will be used to build the transaction and embed your note into the Blockchain. The remaining balance will be sent to your recipient.\n" +
    "      </p>\n" +
    "      <p class='text-center img-wrapper'>\n" +
    "        <img src=\"http://i.imgur.com/ZngzRqH.png\">\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        4. After the note has been embedded, an e-mail will be sent out to your recipient (if specified). They will be able to claim the Bitcoins using the unique token provided in the e-mail.\n" +
    "      </p>\n" +
    "      <p class='text-center img-wrapper'>\n" +
    "        <img src=\"http://i.imgur.com/b6Z8zYw.png\">\n" +
    "      </p>\n" +
    "\n" +
    "    </blockquote>\n" +
    "    <br>\n" +
    "    <h2 class='text-center'>How do messages get embedded?</h2>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        Each standard Bitcoin address is a derivation of the 20 bytes `hash160` e.g.<a target=\"_blank\" href=\"https://helloblock.io/mainnet/addresses/17xVQ1b8EkZweCUnQXWCTNzm7MZSwVwByb\">17xVQ1b8EkZweCUnQXWCTNzm7MZSwVwByb</a>. This allows us to embed an arbitrary 20 bytes message in each output. When you put together a message, we build and propagation a transaction where your message is matched by the hash160s of the outputs.\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        For example, <a target=\"_blank\" href=\"https://helloblock.io/mainnet/transactions/e3a9277237ef037f6e97219f3c79d4146f3431ae28af82980f912a5de6a4f935\">e3a9277237ef037f6e97219f3c79d4146f3431ae28af82980f912a5de6a4f935</a>. This transaction has 3 outputs. The first 2 outputs represent the message, which says “I love you til the end of time.” and the last output is the change output.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <h2 class='text-center'>Technical Details</h2>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        All NoteBlock messages will begin with version bytes 0x4c4f5645 (the hexadecimal representation for  ‘LOVE’) in the first output of a transaction.\n" +
    "        <!--  If we identify a transaction where the first output has a hash160 that starts with that particular version byte we will try to decode it and display it as a message. -->\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        This is built on top of the <a target=\"_blank\" href=\"https://helloblock.io\">HelloBlock API</a>\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <h2 class='text-center'>Manifesto</h2>\n" +
    "    <blockquote>\n" +
    "      <p class=\"lead\">\n" +
    "        This was inspired by the upcoming v0.9 release which makes OP_RETURN a standard transaction output in Bitcoin. See <a target=\"_blank\" href=\"https://github.com/bitcoin/bitcoin/pull/2738\">pull/2738</a>, and <a target=\"_blank\" href=\"https://bitcoinfoundation.org/blog/?p=290\">this blog post</a>\n" +
    "      </p>\n" +
    "      <p class=\"lead\">\n" +
    "        This has big implications for Bitcoin as a programmable currency protocol. Right now, developers have tried various ways to embed arbitrary messages (such as cryptographic hash of import documents) into the blockchain. Using the output’s hash160 to store the data payload is one of the common ways to embed messages. Making OP_RETURN standard has important implications for smart contracts, using Bitcoin transactions to prove / transfer ownership and will enable many more startups to develop innovative solutions using the Bitcoin protocol.\n" +
    "      </p>\n" +
    "    </blockquote>\n" +
    "    <br><br>\n" +
    "    <br><br>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/landing.html',
    "<div class=\"alert alert-info text-center\">\n" +
    "  <a class=\"close\" data-dismiss=\"alert\" href=\"#\" aria-hidden=\"true\">&times;</a>\n" +
    "  <span class=\"h2 thin\">\n" +
    "    Embed an eternal love note into the Blockchain for Valentine's Day\n" +
    "  </span>\n" +
    "</div>\n" +
    "<div id=\"centerpiece\">\n" +
    "  <div class=\"text-center\">\n" +
    "    <span class='h1 title-fancy text-center'>The Noteblock</span>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- <small>\n" +
    "    <em> Forever embed your love note in the Blockchain</em>\n" +
    "  </small> -->\n" +
    "\n" +
    "  <br>\n" +
    "  <div class='h1 text-center calvin-klein'>\n" +
    "    Roses will wither, but the Blockchain is forever.\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"thick-line\"></div>\n" +
    "  <br>\n" +
    "  <!-- TODO: refactor into partial -->\n" +
    "  <tabset>\n" +
    "    <tab heading=\"LATEST NOTES\">\n" +
    "      <div infinite-scroll=\"loadMoreNotes('latest')\" infinite-scroll-distance=\"1\">\n" +
    "        <div class=\"row note\"  ng-repeat=\"note in notes.latest\">\n" +
    "          <br>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <p class='lead text-center'>\n" +
    "              <a class=\"\" href='/notes/{{note.id}}'>\n" +
    "                \"{{note.content}}\" - {{note.sender}}\n" +
    "              </a>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p class='lead text-center' timeago=\"{{note.created_at}}\" live='true'></p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p class='lead text-center'>\n" +
    "              <span class=\"label label-default label-lg dedicated\" to-btc=\"{{note.satoshis}}\"></span>\n" +
    "              <small class='smaller'>DEDICATED</small>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </tab>\n" +
    "    <tab heading=\"TOP NOTES\">\n" +
    "      <div infinite-scroll=\"loadMoreNotes('top')\" infinite-scroll-distance=\"1\">\n" +
    "        <div class=\"row note\"  ng-repeat=\"note in notes.top\">\n" +
    "          <br>\n" +
    "          <div class=\"col-md-8\">\n" +
    "            <p class='lead text-center'>\n" +
    "              <a class=\"\" href='/notes/{{note.id}}'>\n" +
    "                \"{{note.content}}\" - {{note.sender}}\n" +
    "              </a>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p class='lead text-center' timeago=\"{{note.created_at}}\" live='true'></p>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-2\">\n" +
    "            <p class='lead text-center'>\n" +
    "              <span class=\"label label-default label-lg dedicated\" to-btc=\"{{note.satoshis}}\"></span>\n" +
    "              <small class='smaller'>DEDICATED</small>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </tab>\n" +
    "    <div class=\"pull-right btn-create\">\n" +
    "      <a class=\"btn btn-primary\" ng-click=\"NoteModal.open()\">+ CREATE A NOTE</a>\n" +
    "    </div>\n" +
    "\n" +
    "  </tabset>\n" +
    "\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/templates/notes.html',
    "<div id=\"centerpiece\">\n" +
    "  <div class='h1 text-center calvin-klein'>\n" +
    "    \"{{note.content}}\" - {{note.sender}}\n" +
    "  </div>\n" +
    "</div>\n" +
    "<BR>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"col-md-8 col-md-offset-2\">\n" +
    "    <div ng-if=\"note.payment_valid\">\n" +
    "      <div class=\"alert alert-dismissable alert-danger alert-danger-lighter text-center\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n" +
    "        <p class=\"lead\">\n" +
    "          THIS NOTE HAS BEEN FOREVER EMBEDDED IN THE BLOCKCHAIN.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <br>\n" +
    "      <div class='text-center'>\n" +
    "        (Note that some Block Explorers (such as blockchain.info) are slow to recognize pending transactions, we recommended using <a target=\"_blank\" href=\"https://helloblock.io/mainnet\">HelloBlock</a>)\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!note.payment_valid\" ng-hide=\"!note\">\n" +
    "      <div class=\"alert alert-dismissable alert-warning text-center\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n" +
    "        <p class=\"lead\">\n" +
    "          THIS NOTE IS PENDING A 0.001 BTC PAYMENT\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <table class=\"table table-bordered table-striped table-note thin hidden-xs\">\n" +
    "      <tbody>\n" +
    "        <tr>\n" +
    "          <td>FROM:</td>\n" +
    "          <td>{{note.sender}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>NOTE (DECODED):</td>\n" +
    "          <td>\n" +
    "            {{note.content}}\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>NOTE (RAW HEX):</td>\n" +
    "          <td class='break'>\n" +
    "            {{note.note_hex}}\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>TRANSACTION HASH:</td>\n" +
    "          <td>\n" +
    "            <a target=\"_blank\" href=\"https://helloblock.io/mainnet/transactions/{{note.tx_hash}}\">\n" +
    "              {{note.tx_hash}}\n" +
    "            </a>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>NOTE ID:</td>\n" +
    "          <td>\n" +
    "            {{note.id}}\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>TIME CREATED:</td>\n" +
    "          <td>{{note.created_at}}</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>MAGIC BYTES:</td>\n" +
    "          <td>4c4f5645</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <td>BTC DEDICATED:</td>\n" +
    "          <td to-btc=\"{{note.total_paid}}\"></td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "\n" +
    "    </table>\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>\n"
  );

}]);
