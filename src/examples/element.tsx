export default (
  <div
    style={{
      width: 600,
      height: 520,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#f0f8ff',
      borderRadius: 12,
      border: '2px solid #4682b4',
    }}
  >
    <div
      style={{
        height: 50,
        backgroundColor: '#4169e1',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
      }}
    >
      <div>Центрированный заголовок</div>
    </div>

    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        gap: 15,
      }}
    >
      <div
        style={{
          width: 150,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          padding: 15,
          backgroundColor: '#e6e6fa',
          borderRadius: 8,
          gap: 8,
        }}
      >
        <div
          style={{
            height: 35,
            backgroundColor: '#9370db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: 4,
          }}
        >
          <div>Профиль</div>
        </div>
        <div
          style={{
            height: 35,
            backgroundColor: '#9370db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: 4,
          }}
        >
          <div>Настройки</div>
        </div>
        <div
          style={{
            height: 35,
            backgroundColor: '#9370db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: 4,
          }}
        >
          <div>Сообщения</div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div
          style={{
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            padding: 15,
            backgroundColor: '#fff0f5',
            borderRadius: 8,
          }}
        >
          <div
            style={{
              height: 25,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                minWidth: 80,
                height: 25,
                backgroundColor: '#ff6b6b',
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}
            >
              <div>Слева</div>
            </div>
            <div
              style={{
                minWidth: 80,
                height: 25,
                backgroundColor: '#4ecdc4',
                alignSelf: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}
            >
              <div>Центр</div>
            </div>
            <div
              style={{
                minWidth: 80,
                height: 25,
                backgroundColor: '#45b7d1',
                alignSelf: 'flex-end',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}
            >
              <div>Справа</div>
            </div>
          </div>

          <div
            style={{
              height: 40,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div
              style={{
                padding: 10,
                height: 25,
                backgroundColor: '#32cd32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}
            >
              <div>Кнопка 1</div>
            </div>
            <div
              style={{
                padding: 10,
                height: 25,
                backgroundColor: '#ffa500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}
            >
              <div>Кнопка 2</div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: 10,
            padding: 15,
            backgroundColor: '#f8f8ff',
            borderRadius: 8,
            border: '1px dashed #ccc',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <div
              key={num}
              style={{
                minWidth: 70,
                minHeight: 50,
                backgroundColor: num % 3 === 0 ? '#ffa07a' : num % 3 === 1 ? '#98fb98' : '#87ceeb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                flexShrink: 0,
                aspectRatio: num === 1 ? 1 : undefined,
              }}
            >
              <div>{num}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      style={{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#696969',
        color: 'white',
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div>Левый элемент</div>
      <div>Центральный элемент</div>
      <div>Правый элемент</div>
    </div>
  </div>
);
