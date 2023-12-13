import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zavisimos-т-ч-созд-док', 'Unit | Model | i-i-s-zavisimos-т-ч-созд-док', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-zavisimos-ав-пользователи',
    'model:i-i-s-zavisimos-вход-в-систему',
    'model:i-i-s-zavisimos-документ-не-ут',
    'model:i-i-s-zavisimos-должность',
    'model:i-i-s-zavisimos-сотрудники',
    'model:i-i-s-zavisimos-т-ч-пользователь',
    'model:i-i-s-zavisimos-т-ч-права',
    'model:i-i-s-zavisimos-т-ч-созд-док',
    'model:i-i-s-zavisimos-т-ч-утверж-док',
    'model:i-i-s-zavisimos-утверждение-док',
    'model:i-i-s-zavisimos-форма-документа',
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
