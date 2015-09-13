'use strict';

describe('text schema validator', function() {

  it('should automatically open instruction modal window', function() {
    browser.get('index.html');
    expect(element(by.className('modal-header')).isDisplayed()).toBe(true);
    element(by.id('modalOK')).click();
	expect(element(by.className('modal-header')).isPresent()).toBe(false);    
  });


  describe('loding input files', function() {

    beforeEach(function() {
      browser.get('index.html');
      element(by.id('modalOK')).click();
    });

    var path = require('path');
    
    it('should upload if text input file type is correct', function() {   	
    	var fileToUpload = 'testFiles/transamerica_expected_text.txt',
        absolutePath = path.resolve(__dirname, fileToUpload);
    	element(by.id('inputFile')).sendKeys(absolutePath);  
    	expect(element(by.id('inputFile')).getAttribute('value')).toContain('transamerica_expected_text.txt');    
    });

    it('should refuse upload if input file type is incorrect', function() {   	
    	var fileToUpload = 'testFiles/transamerica_inbound_loans.xsd',
        absolutePath = path.resolve(__dirname, fileToUpload);
    	element(by.id('inputFile')).sendKeys(absolutePath);  
    	expect(element(by.id('inputFile')).getAttribute('value')).toEqual('');    
    });
    
    it('should upload if schema input file type is correct', function() {   	
    	var fileToUpload = 'testFiles/transamerica_inbound_loans.xsd',
        absolutePath = path.resolve(__dirname, fileToUpload);
    	element(by.id('schemaFile')).sendKeys(absolutePath);  
    	expect(element(by.id('schemaFile')).getAttribute('value')).toContain('transamerica_inbound_loans.xsd');    
    });
    
    it('should refuse upload if schema file type is incorrect', function() {   	
    	var fileToUpload = 'testFiles/transamerica_expected_text.txt',
        absolutePath = path.resolve(__dirname, fileToUpload);
    	element(by.id('schemaFile')).sendKeys(absolutePath);  
    	expect(element(by.id('schemaFile')).getAttribute('value')).toEqual('');    
    });
    
  });
  

});

