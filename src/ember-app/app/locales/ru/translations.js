import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISZavisimosАвПользователиLForm from './forms/i-i-s-zavisimos-ав-пользователи-l';
import IISZavisimosВходВСистемуLForm from './forms/i-i-s-zavisimos-вход-в-систему-l';
import IISZavisimosДокументНеУтLForm from './forms/i-i-s-zavisimos-документ-не-ут-l';
import IISZavisimosДолжностьLForm from './forms/i-i-s-zavisimos-должность-l';
import IISZavisimosСотрудникиLForm from './forms/i-i-s-zavisimos-сотрудники-l';
import IISZavisimosУтверждениеДокLForm from './forms/i-i-s-zavisimos-утверждение-док-l';
import IISZavisimosФормаДокументаLForm from './forms/i-i-s-zavisimos-форма-документа-l';
import IISZavisimosАвПользователиEForm from './forms/i-i-s-zavisimos-ав-пользователи-e';
import IISZavisimosВходВСистемуEForm from './forms/i-i-s-zavisimos-вход-в-систему-e';
import IISZavisimosДокументНеУтEForm from './forms/i-i-s-zavisimos-документ-не-ут-e';
import IISZavisimosДолжностьEForm from './forms/i-i-s-zavisimos-должность-e';
import IISZavisimosСотрудникиEForm from './forms/i-i-s-zavisimos-сотрудники-e';
import IISZavisimosУтверждениеДокEForm from './forms/i-i-s-zavisimos-утверждение-док-e';
import IISZavisimosФормаДокументаEForm from './forms/i-i-s-zavisimos-форма-документа-e';
import IISZavisimosАвПользователиModel from './models/i-i-s-zavisimos-ав-пользователи';
import IISZavisimosВходВСистемуModel from './models/i-i-s-zavisimos-вход-в-систему';
import IISZavisimosДокументНеУтModel from './models/i-i-s-zavisimos-документ-не-ут';
import IISZavisimosДолжностьModel from './models/i-i-s-zavisimos-должность';
import IISZavisimosСотрудникиModel from './models/i-i-s-zavisimos-сотрудники';
import IISZavisimosТЧПользовательModel from './models/i-i-s-zavisimos-т-ч-пользователь';
import IISZavisimosТЧПраваModel from './models/i-i-s-zavisimos-т-ч-права';
import IISZavisimosТЧСоздДокModel from './models/i-i-s-zavisimos-т-ч-созд-док';
import IISZavisimosТЧУтвержДокModel from './models/i-i-s-zavisimos-т-ч-утверж-док';
import IISZavisimosУтверждениеДокModel from './models/i-i-s-zavisimos-утверждение-док';
import IISZavisimosФормаДокументаModel from './models/i-i-s-zavisimos-форма-документа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zavisimos-ав-пользователи': IISZavisimosАвПользователиModel,
    'i-i-s-zavisimos-вход-в-систему': IISZavisimosВходВСистемуModel,
    'i-i-s-zavisimos-документ-не-ут': IISZavisimosДокументНеУтModel,
    'i-i-s-zavisimos-должность': IISZavisimosДолжностьModel,
    'i-i-s-zavisimos-сотрудники': IISZavisimosСотрудникиModel,
    'i-i-s-zavisimos-т-ч-пользователь': IISZavisimosТЧПользовательModel,
    'i-i-s-zavisimos-т-ч-права': IISZavisimosТЧПраваModel,
    'i-i-s-zavisimos-т-ч-созд-док': IISZavisimosТЧСоздДокModel,
    'i-i-s-zavisimos-т-ч-утверж-док': IISZavisimosТЧУтвержДокModel,
    'i-i-s-zavisimos-утверждение-док': IISZavisimosУтверждениеДокModel,
    'i-i-s-zavisimos-форма-документа': IISZavisimosФормаДокументаModel
  },

  'application-name': 'Zavisimos',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Zavisimos',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zavisimos',
          title: 'Zavisimos'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        zavisimos: {
          caption: 'Zavisimos',
          title: 'Zavisimos',
          'i-i-s-zavisimos-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-zavisimos-документ-не-ут-l': {
            caption: 'Документ не ут',
            title: ''
          },
          'i-i-s-zavisimos-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-zavisimos-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-zavisimos-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-zavisimos-утверждение-док-l': {
            caption: 'Утверждение док',
            title: ''
          },
          'i-i-s-zavisimos-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-zavisimos-ав-пользователи-l': IISZavisimosАвПользователиLForm,
    'i-i-s-zavisimos-вход-в-систему-l': IISZavisimosВходВСистемуLForm,
    'i-i-s-zavisimos-документ-не-ут-l': IISZavisimosДокументНеУтLForm,
    'i-i-s-zavisimos-должность-l': IISZavisimosДолжностьLForm,
    'i-i-s-zavisimos-сотрудники-l': IISZavisimosСотрудникиLForm,
    'i-i-s-zavisimos-утверждение-док-l': IISZavisimosУтверждениеДокLForm,
    'i-i-s-zavisimos-форма-документа-l': IISZavisimosФормаДокументаLForm,
    'i-i-s-zavisimos-ав-пользователи-e': IISZavisimosАвПользователиEForm,
    'i-i-s-zavisimos-вход-в-систему-e': IISZavisimosВходВСистемуEForm,
    'i-i-s-zavisimos-документ-не-ут-e': IISZavisimosДокументНеУтEForm,
    'i-i-s-zavisimos-должность-e': IISZavisimosДолжностьEForm,
    'i-i-s-zavisimos-сотрудники-e': IISZavisimosСотрудникиEForm,
    'i-i-s-zavisimos-утверждение-док-e': IISZavisimosУтверждениеДокEForm,
    'i-i-s-zavisimos-форма-документа-e': IISZavisimosФормаДокументаEForm
  },

});

export default translations;
