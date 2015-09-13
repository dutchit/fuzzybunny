var HttpBackend = require('./lib/httpbackend');
var path = require('path');
var browserGet = browser.get;
var backend = null;

describe('Test Http submit form', function() {
    beforeEach(function() {
        backend = new HttpBackend(browser);
	    browser.get('index.html');
	    element(by.id('modalOK')).click();
    });

    afterEach(function() {
        backend.clear();
    });

    it('should get file name and result message', function() {
        backend.whenPOST('http://localhost:8080/ValidateService/webapi/runSchema').respond('result string from mock server');
        
	    var finputFileToUpload = 'testFiles/transamerica_inbound_loans.xsd',
        absolutePath = path.resolve(__dirname, finputFileToUpload);
    	element(by.id('schemaFile')).sendKeys(absolutePath);  

    	var schemaFileToUpload = 'testFiles/transamerica_expected_text.txt',
        absolutePath = path.resolve(__dirname, schemaFileToUpload);
    	element(by.id('inputFile')).sendKeys(absolutePath);  
    	
    	element(by.id('submitForm')).click();
      
    	expect(element(by.id('enter_name')).getAttribute('value')).toContain('transamerica_expected_tex_TextToXML'); 
    	expect(element(by.id('comment')).getAttribute('value')).toEqual('result string from mock server'); 
	});

});
