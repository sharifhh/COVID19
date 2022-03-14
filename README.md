# COVID19 React Native App

This is a project created using `npx react-native init --template react-native-template-typescript`

## Run the app

To start the app you need to clone it and run the following
For iOS:
```
yarn install
npx pod-install
yarn ios
```

For Android:
```
yarn install
yarn android
```

## Used Libraries

1. gorhom/bottom-sheet: a nice bottom sheet component.
2. netinfo: Used to check when the app is online again for react-query.
3. apisauce: Axios + standardized errors + request/response transforms.
4. immer: who says no for reducing complex states?
5. zustand: to store the local data in store and persist it.
6. react-native-mmkv: a much better and faster storage utility instead of AsyncStorage.
7. react-hook-form: forms is much better with refs, don't you agree?
8. react-navigation: for navigation (used the tabs).
9. react-native-chart-kit: some cool charts library.
10. react-native-vector-icons: think of an icon, you can find it here.
