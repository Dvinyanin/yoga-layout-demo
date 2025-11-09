export default (
  <div
    style={{
      width: 700,
      height: 500,
      padding: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      border: '1px solid #ddd',
      gap: 12,
    }}
  >
    {/* Header with search and actions */}
    <div
      style={{
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
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
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#e9ecef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
          }}
        >
          <div>M</div>
        </div>
        <div>My Application</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            minWidth: 100,
            height: 20,
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            outline: '4px solid #dee2e6',
          }}
        >
          <div>Search...</div>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            border: '1px solid #dee2e6',
          }}
        >
          <div>+</div>
        </div>
      </div>
    </div>

    {/* Main content area with complex nesting */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        gap: 12,
      }}
    >
      {/* Left panel - multi-level navigation */}
      <div
        style={{
          width: 160,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {/* Navigation section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        >
          <div
            style={{
              height: 32,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: '#e9ecef',
              borderRadius: 4,
            }}
          >
            <div>Dashboard</div>
          </div>
          <div
            style={{
              height: 32,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: 4,
            }}
          >
            <div>Projects</div>
          </div>
          <div
            style={{
              height: 32,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: 4,
            }}
          >
            <div>Tasks</div>
          </div>
        </div>

        {/* Nested sub-navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            padding: 8,
            backgroundColor: '#fff',
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        >
          <div
            style={{
              height: 26,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12,
              paddingRight: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: 3,
            }}
          >
            <div>Recent</div>
          </div>
          <div
            style={{
              height: 26,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12,
              paddingRight: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: 3,
            }}
          >
            <div>Favorites</div>
          </div>
          <div
            style={{
              height: 26,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 12,
              paddingRight: 8,
              backgroundColor: '#f8f9fa',
              borderRadius: 3,
            }}
          >
            <div>Archived</div>
          </div>
        </div>
      </div>

      {/* Center content - complex card layout */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          gap: 10,
        }}
      >
        {/* Card grid with different alignments */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            height: 120,
          }}
        >
          {/* Card with centered content */}
          <div
            style={{
              width: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 12,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
              >
                <div>📁</div>
              </div>
              <div>Files</div>
            </div>
          </div>

          {/* Card with space-between alignment */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              justifyContent: 'space-between',
              padding: 12,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          >
            <div>Project Status</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 24,
              }}
            >
              <div
                style={{
                  minWidth: 60,
                  height: 20,
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}
              >
                <div>Active</div>
              </div>
              <div
                style={{
                  minWidth: 40,
                  height: 20,
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                }}
              >
                <div>75%</div>
              </div>
            </div>
          </div>

          {/* Card with flex-end alignment */}
          <div
            style={{
              width: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              padding: 12,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          >
            <div
              style={{
                minWidth: 60,
                height: 24,
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
              }}
            >
              <div>New</div>
            </div>
          </div>
        </div>

        {/* Complex nested section with mixed alignments */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
            gap: 10,
          }}
        >
          {/* Left content area */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              gap: 8,
            }}
          >
            {/* Header with actions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 36,
                paddingLeft: 12,
                paddingRight: 12,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              <div>Recent Activity</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                  }}
                >
                  <div>↑</div>
                </div>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                  }}
                >
                  <div>↓</div>
                </div>
              </div>
            </div>

            {/* Activity list with different item alignments */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 4,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              {[1, 2, 3, 4].map(item => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    height: 32,
                    paddingLeft: 8,
                    paddingRight: 8,
                    backgroundColor: item === 1 ? '#e9ecef' : '#f8f9fa',
                    borderRadius: 4,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#dee2e6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                    }}
                  >
                    <div>{item}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexGrow: 1,
                    }}
                  >
                    <div>Activity item {item}</div>
                  </div>
                  <div
                    style={{
                      minWidth: 40,
                      height: 18,
                      backgroundColor: '#dee2e6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                    }}
                  >
                    <div>Tag</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div
            style={{
              width: 140,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {/* Quick actions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              <div>Quick Actions</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 4,
                  alignContent: 'flex-start',
                }}
              >
                {['New', 'Edit', 'Save', 'Share'].map(action => (
                  <div
                    key={action}
                    style={{
                      minWidth: 50,
                      height: 24,
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 3,
                    }}
                  >
                    <div>{action}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                padding: 12,
                backgroundColor: '#fff',
                borderRadius: 6,
                border: '1px solid #ccc',
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25,
                }}
              >
                <div>✓</div>
              </div>
              <div>Online</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer with multiple sections */}
    <div
      style={{
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
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
          gap: 12,
        }}
      >
        <div>Status: Ready</div>
        <div
          style={{
            width: 8,
            height: 8,
            backgroundColor: '#28a745',
            borderRadius: 4,
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <div>Help</div>
        <div>Settings</div>
        <div>Profile</div>
      </div>
    </div>
  </div>
);
