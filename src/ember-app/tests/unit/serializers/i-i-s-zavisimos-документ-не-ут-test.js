import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zavisimos-документ-не-ут', 'Unit | Serializer | i-i-s-zavisimos-документ-не-ут', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-zavisimos-документ-не-ут',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-zavisimos-отделы',
    'transform:i-i-s-zavisimos-пол',
    'transform:i-i-s-zavisimos-права-пол',
    'transform:i-i-s-zavisimos-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
