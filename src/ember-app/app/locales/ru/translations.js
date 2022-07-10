import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
        'application-name': 'I s s5',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s5',
          title: 'I s s5'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s5-пользователь-l': IISISS5ПользовательLForm,
    'i-i-s-i-s-s5-условие-l': IISISS5УсловиеLForm,
    'i-i-s-i-s-s5-пользователь-e': IISISS5ПользовательEForm,
    'i-i-s-i-s-s5-условие-e': IISISS5УсловиеEForm
  },

});

export default translations;
