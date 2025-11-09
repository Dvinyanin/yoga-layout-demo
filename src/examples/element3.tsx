export default (
  <div
    style={{
      width: 900,
      height: 700,
      padding: 20,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      border: '1px solid #ddd',
      gap: 16,
    }}
  >
    {/* Header */}
    <div
      style={{
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        border: '1px solid #ccc',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
          }}
        >
          <div>Logo</div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <div>Home</div>
          <div>Products</div>
          <div>Services</div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            minWidth: 120,
            height: 30,
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}
        >
          <div>Search...</div>
        </div>
      </div>
    </div>

    {/* Main Content Area */}
    <div
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: 180,
          display: 'flex',
          gap: 12,
        }}
      >
        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            padding: 12,
            backgroundColor: '#fff',
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              height: 35,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#f0f0f0',
              borderRadius: 4,
            }}
          >
            <div>Dashboard</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              height: 35,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#f0f0f0',
              borderRadius: 4,
            }}
          >
            <div>Projects</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              height: 35,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: '#f0f0f0',
              borderRadius: 4,
            }}
          >
            <div>Settings</div>
          </div>
        </div>

        {/* Progress Stats */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            padding: 12,
            backgroundColor: '#fff',
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 20,
            }}
          >
            <div>Storage</div>
            <div>75%</div>
          </div>
          <div
            style={{
              height: 6,
              backgroundColor: '#e0e0e0',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '75%',
                height: 6,
                backgroundColor: '#a0a0a0',
                borderRadius: 3,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          gap: 16,
        }}
      >
        {/* Top Section - Metrics Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            height: 100,
          }}
        >
          {[1, 2, 3, 4].map(index => (
            <div
              key={index}
              style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                padding: 16,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 6,
                }}
              >
                <div>{index + 1}</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 4,
                  }}
                >
                  <div>Metric {index + 1}</div>
                  <div>Value</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
          }}
        >
          {/* Left - Main Content */}
          <div
            style={{
              flexGrow: 2,
              display: 'flex',
              gap: 12,
            }}
          >
            {/* Content Area */}
            <div
              style={{
                flexGrow: 1,
                display: 'flex',
                padding: 16,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f8f8f8',
                  borderRadius: 4,
                }}
              >
                <div>Main Content Area</div>
              </div>
            </div>

            {/* Side Widgets */}
            <div
              style={{
                width: 150,
                display: 'flex',
                gap: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  padding: 12,
                  backgroundColor: '#fff',
                  borderRadius: 6,
                  border: '1px solid #ccc',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                >
                  <div>Widget</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Side Panel */}
          <div
            style={{
              width: 200,
              display: 'flex',
              gap: 10,
              padding: 16,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexGrow: 1,
                gap: 8,
              }}
            >
              <div>Activity</div>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    height: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    backgroundColor: '#f8f8f8',
                    borderRadius: 4,
                  }}
                >
                  <div>Item {item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            height: 120,
            display: 'flex',
            padding: 16,
            backgroundColor: '#fff',
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8f8f8',
              borderRadius: 4,
            }}
          >
            <div>Data Section</div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        border: '1px solid #ccc',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
        }}
      >
        <div>Terms</div>
        <div>Privacy</div>
        <div>Help</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 15,
        }}
      >
        <div>Settings</div>
      </div>
    </div>
  </div>
);
