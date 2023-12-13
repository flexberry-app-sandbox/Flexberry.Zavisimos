import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.zavisimos.caption'),
          title: i18n.t('forms.application.sitemap.zavisimos.title'),
          children: [{
            link: 'i-i-s-zavisimos-должность-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-должность-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-zavisimos-документ-не-ут-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-документ-не-ут-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-документ-не-ут-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-zavisimos-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-ав-пользователи-l.title'),
            children: null
          }, {
            link: 'i-i-s-zavisimos-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-zavisimos-форма-документа-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-форма-документа-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-форма-документа-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-zavisimos-утверждение-док-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-утверждение-док-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-утверждение-док-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-zavisimos-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.zavisimos.i-i-s-zavisimos-вход-в-систему-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})