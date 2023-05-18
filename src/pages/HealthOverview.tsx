import { data, pageTitle, sectionTitle } from '../utils/mockData';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    margin: 15,
    marignTop: 15,
    padding: 10,
  },

  blueBar: {
    top: 0,
    padding: 0,
    width: 14,
    backgroundColor: '#50B2FA',
  },
  cards: {
    width: '48%',
    marginBottom: 15,
  },
});

const HealthOverview = () => (
  <>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.blueBar} />
      <View style={{ marginLeft: 10, marginTop: 30, width: '500px' }}>
        <View style={{ width: 150 }}>
          <Text>{pageTitle}</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>logo</Text>
      </View>
    </View>
    <View style={styles.section}>
      <View>
        <Text style>{sectionTitle}</Text>
      </View>

      <View style={{ marginTop: 10, fontSize: 14, color: '#242E38' }}>
        <Text style>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{' '}
        </Text>
      </View>
    </View>
    {/* next section */}
    <View
      style={[
        styles.section,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexFlow: 'row wrap',
        },
      ]}
    >
      {data.map((x: any) => (
        <View
          style={[
            styles.cards,
            {
              flexDirection: 'row',
              backgroundColor: x.color,
              opacity: '0.07',
            },
          ]}
        >
          <View
            style={{
              width: 5,
              backgroundColor: x.color,
              height: '80%',
              marginTop: '7%',
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5,
              opacity: '1',
            }}
          />
          <View>
            <View style={{ margin: 20, opacity: '1' }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  fontSize: 14,
                }}
              >
                <Text style={{ color: x.color, width: '70%' }}>{x.title}</Text>
                <Text style={{ marginLeft: '5%' }}> cirlce</Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 12 }}>{x.description}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  </>
);

export default HealthOverview;
