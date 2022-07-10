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
          caption: i18n.t('forms.application.sitemap.i-s-s5.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s5.title'),
          children: [{
            link: 'i-i-s-i-s-s5-пользователь-l',
            caption: i18n.t('forms.application.sitemap.i-s-s5.i-i-s-i-s-s5-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s5.i-i-s-i-s-s5-пользователь-l.title'),
            children: null
          }, {
            link: 'i-i-s-i-s-s5-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s5.i-i-s-i-s-s5-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s5.i-i-s-i-s-s5-условие-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})