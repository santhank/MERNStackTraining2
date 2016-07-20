var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the movieurl route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/movieurldata")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          //should.not.exist(err);
          var myObj = JSON.parse(res.text);
          console.log(myObj);
          myObj.title.should.be.equal("Transformers");
          done();
        });
  });
  });