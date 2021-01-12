import assert from 'assert';
import chai from "chai";
import chaiHttp from "chai-http";
import sinonChai from 'sinon-chai';
import app from '../app.js';

chai.use(chaiHttp);
chai.use(sinonChai);

export const { expect } = chai;
export const server = chai.request(app);