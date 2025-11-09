export default (
  <div
    style={{
      width: 500,
      height: 400,
      padding: 15,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#f8f9fa',
      borderRadius: 8,
      border: '1px solid #dee2e6',
    }}
  >
    {/* Header - теперь row направление нужно указать явно */}
    <div
      style={{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#495057',
        color: 'white',
        borderRadius: 4,
      }}
    >
      <div>Логотип</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 15,
        }}
      >
        <div>Главная</div>
        <div>О нас</div>
        <div>Контакты</div>
      </div>
    </div>

    {/* Основной контент */}
    <div
      style={{
        flex: 1,
        display: 'flex',
        gap: 8,
      }}
    >
      {/* Боковая панель и контент - row направление */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          flex: 1,
        }}
      >
        {/* Левая панель */}
        <div
          style={{
            width: 120,
            display: 'flex',
            gap: 6,
            padding: 10,
            backgroundColor: '#e9ecef',
            borderRadius: 4,
          }}
        >
          <div
            style={{
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#adb5bd',
              borderRadius: 3,
            }}
          >
            <div>Меню 1</div>
          </div>
          <div
            style={{
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#adb5bd',
              borderRadius: 3,
            }}
          >
            <div>Меню 2</div>
          </div>
        </div>

        {/* Правая часть - карточки */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            gap: 8,
          }}
        >
          {/* Верхние карточки - row направление */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
              height: 80,
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dee2e6',
                borderRadius: 4,
                padding: 10,
              }}
            >
              <div>Карточка 1</div>
            </div>
            <div
              style={{
                flex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ced4da',
                borderRadius: 4,
                padding: 10,
              }}
            >
              <div>Широкая карточка</div>
            </div>
          </div>

          {/* Нижняя часть */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              gap: 6,
              padding: 10,
              backgroundColor: '#f1f3f4',
              borderRadius: 4,
            }}
          >
            {/* Горизонтальное выравнивание - row направление */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 30,
              }}
            >
              <div
                style={{
                  minWidth: 70,
                  height: 25,
                  backgroundColor: '#74c69d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}
              >
                <div>Лево</div>
              </div>
              <div
                style={{
                  minWidth: 70,
                  height: 25,
                  backgroundColor: '#40916c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}
              >
                <div>Центр</div>
              </div>
            </div>

            {/* Wrap контейнер - row направление */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 5,
                padding: 8,
                backgroundColor: '#e2eafc',
                borderRadius: 4,
                alignContent: 'flex-start',
              }}
            >
              {['React', 'TS', 'JS', 'CSS'].map(tag => (
                <div
                  key={tag}
                  style={{
                    minWidth: 50,
                    height: 25,
                    backgroundColor: '#abc4ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 12,
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}
                >
                  <div>{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer - row направление */}
    <div
      style={{
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6c757d',
        color: 'white',
        borderRadius: 4,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <div>© 2024 Все права защищены</div>
    </div>
  </div>
);
