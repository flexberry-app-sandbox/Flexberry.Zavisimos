import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zavisimos-ав-пользователи-l');
  this.route('i-i-s-zavisimos-ав-пользователи-e',
  { path: 'i-i-s-zavisimos-ав-пользователи-e/:id' });
  this.route('i-i-s-zavisimos-ав-пользователи-e.new',
  { path: 'i-i-s-zavisimos-ав-пользователи-e/new' });
  this.route('i-i-s-zavisimos-вход-в-систему-l');
  this.route('i-i-s-zavisimos-вход-в-систему-e',
  { path: 'i-i-s-zavisimos-вход-в-систему-e/:id' });
  this.route('i-i-s-zavisimos-вход-в-систему-e.new',
  { path: 'i-i-s-zavisimos-вход-в-систему-e/new' });
  this.route('i-i-s-zavisimos-документ-не-ут-l');
  this.route('i-i-s-zavisimos-документ-не-ут-e',
  { path: 'i-i-s-zavisimos-документ-не-ут-e/:id' });
  this.route('i-i-s-zavisimos-документ-не-ут-e.new',
  { path: 'i-i-s-zavisimos-документ-не-ут-e/new' });
  this.route('i-i-s-zavisimos-должность-l');
  this.route('i-i-s-zavisimos-должность-e',
  { path: 'i-i-s-zavisimos-должность-e/:id' });
  this.route('i-i-s-zavisimos-должность-e.new',
  { path: 'i-i-s-zavisimos-должность-e/new' });
  this.route('i-i-s-zavisimos-сотрудники-l');
  this.route('i-i-s-zavisimos-сотрудники-e',
  { path: 'i-i-s-zavisimos-сотрудники-e/:id' });
  this.route('i-i-s-zavisimos-сотрудники-e.new',
  { path: 'i-i-s-zavisimos-сотрудники-e/new' });
  this.route('i-i-s-zavisimos-утверждение-док-l');
  this.route('i-i-s-zavisimos-утверждение-док-e',
  { path: 'i-i-s-zavisimos-утверждение-док-e/:id' });
  this.route('i-i-s-zavisimos-утверждение-док-e.new',
  { path: 'i-i-s-zavisimos-утверждение-док-e/new' });
  this.route('i-i-s-zavisimos-форма-документа-l');
  this.route('i-i-s-zavisimos-форма-документа-e',
  { path: 'i-i-s-zavisimos-форма-документа-e/:id' });
  this.route('i-i-s-zavisimos-форма-документа-e.new',
  { path: 'i-i-s-zavisimos-форма-документа-e/new' });
});

export default Router;
