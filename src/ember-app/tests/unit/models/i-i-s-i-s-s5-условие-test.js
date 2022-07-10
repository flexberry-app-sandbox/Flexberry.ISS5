import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s5-условие', 'Unit | Model | i-i-s-i-s-s5-условие', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-s-s5-вид-поддержки',
    'model:i-i-s-i-s-s5-пользователь',
    'model:i-i-s-i-s-s5-условие',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
