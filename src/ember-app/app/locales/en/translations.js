import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS5ПользовательLForm from './forms/i-i-s-i-s-s5-пользователь-l';
import IISISS5УсловиеLForm from './forms/i-i-s-i-s-s5-условие-l';
import IISISS5ПользовательEForm from './forms/i-i-s-i-s-s5-пользователь-e';
import IISISS5УсловиеEForm from './forms/i-i-s-i-s-s5-условие-e';
import IISISS5ВидПоддержкиModel from './models/i-i-s-i-s-s5-вид-поддержки';
import IISISS5ПользовательModel from './models/i-i-s-i-s-s5-пользователь';
import IISISS5УсловиеModel from './models/i-i-s-i-s-s5-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s5-вид-поддержки': IISISS5ВидПоддержкиModel,
    'i-i-s-i-s-s5-пользователь': IISISS5ПользовательModel,
    'i-i-s-i-s-s5-условие': IISISS5УсловиеModel
  },

  'application-name': 'I s s5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s5',
          title: 'I s s5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s5': {
          caption: 'ISS5',
          title: 'ISS5',
          'i-i-s-i-s-s5-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s5-условие-l': {
            caption: 'Условие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s5-пользователь-l': IISISS5ПользовательLForm,
    'i-i-s-i-s-s5-условие-l': IISISS5УсловиеLForm,
    'i-i-s-i-s-s5-пользователь-e': IISISS5ПользовательEForm,
    'i-i-s-i-s-s5-условие-e': IISISS5УсловиеEForm
  },

});

export default translations;
