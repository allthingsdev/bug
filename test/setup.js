import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import app from '../src/app.js';

chai.use(sinonChai);
export const { expect } = chai;
export const server = supertest.agent(app);

export const ITEMS_URL = '/items';
export const USERS_URL = '/users';
export const UOM_URL = '/uom';
export const CAT_URL = '/categories';
export const TRANS_URL = '/transactions';
export const MODES_URL = '/modes';
export const INDEX_URL = '';
