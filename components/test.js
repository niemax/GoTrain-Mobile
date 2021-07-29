export default function Dialogs({
  visible,
  setVisible,
  paino,
  setPaino,
  toisto,
  setToisto,
  lisatieto,
  setLisatieto,
  open,
  setOpen,
  toistotPainotData,
  setToistotPainotData,
  sarjatLength,
}) {
  const lisaaIcon = <Feather name="edit-2" size={26} style={{ marginLeft: 180 }} />;

  const notDoneIcon = (
    <Feather
      name="x"
      size={26}
      style={{ marginLeft: 45, backgroundColor: '#fff' }}
      ref={listItemRef}
    />
  );

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const handleToistotPainotData = () => {
    listItemRef.current.style = 'backgroundColor: green';
  };
  return (
    <>
      <View style={styles.contentContainer}>
        {Array.from(Array(parseInt(sarjatLength))).map((i, idx) => (
          <TouchableOpacity onPress={() => setVisible(true)}>
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text marginTop="25px" medium>
                    Sarja {idx + 1}
                  </Text>
                  {lisaaIcon}
                  {notDoneIcon}
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
