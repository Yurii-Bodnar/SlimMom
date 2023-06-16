import { useSelector } from 'react-redux';
import {
  BoxNotRecommendedProducts,
  Container,
  ItemSummary,
  ListNotRecommendedProducts,
  ListSummary,
  Text,
  Title,
  TitleSecond,
} from './UserSummary.styled';
import { v4 as uuidv4 } from 'uuid';
import { useIsTabletOrDesktop } from 'hooks/mediaQuery';
import {
  selectConsumed,
  selectDailyRate,
  selectDailyRateForFist,
  selectDataCalendar,
  selectKcalLeft,
  selectModalDataNotAllowedProducts,
  selectPercent,
} from 'redux/userData/userDataSelectors';
import {
  correctDataForSummary,
  replaceForSummary,
} from 'utility/auxiliaryFunctions';

const UserSummary = () => {
  const dailyRateForFist = useSelector(selectDailyRateForFist);
  const notAllowedProducts = useSelector(selectModalDataNotAllowedProducts);
  // const leftKcal = useSelector(selectKcalLeft);
  // const costumed = useSelector(selectConsumed);
  // const dailyRateForSummary = useSelector(selectDailyRate);
  // const percent = useSelector(selectPercent);
  const summary = useSelector(state => state.userData.userSummary);
  console.log(summary);
  // const { kcalLeft, kcalConsumed, percentsOfDailyRate, dailyRate } =
  //   summary?.daySummary;
  // console.log(costumed);
  // console.log(kcalConsumed);
  const isTabletOrDesc = useIsTabletOrDesktop();
  const dataToday = useSelector(selectDataCalendar);

  return (
    <Container>
      <ListSummary>
        <Title>
          {!dataToday
            ? correctDataForSummary(Date.now())
            : replaceForSummary(dataToday)}
        </Title>
        <ItemSummary>
          <Text>Left</Text>
          <Text>
            {!summary?.kcalLeft && !summary?.daySummary?.kcalLeft
              ? '0 '
              : summary?.kcalLeft || summary?.daySummary?.kcalLeft}{' '}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>Consumed</Text>
          <Text>
            {!summary?.daySummary?.kcalConsumed && !summary?.kcalConsumed
              ? '0'
              : summary?.daySummary?.kcalConsumed || summary?.kcalConsumed}{' '}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>Daily rate</Text>
          <Text>
            {!summary?.daySummary?.dailyRate &&
            !dailyRateForFist &&
            !summary?.dailyRate
              ? '0 '
              : summary?.daySummary?.dailyRate ||
                dailyRateForFist ||
                summary?.dailyRate}
            kcal
          </Text>
        </ItemSummary>
        <ItemSummary>
          <Text>n% of normal</Text>
          <Text>
            {!summary?.daySummary?.percentsOfDailyRate &&
            !summary?.percentsOfDailyRate
              ? '0'
              : summary?.daySummary?.percentsOfDailyRate.toFixed(2) ||
                summary?.percentsOfDailyRate.toFixed(2)}{' '}
            %
          </Text>
        </ItemSummary>
      </ListSummary>

      {isTabletOrDesc ? (
        <div>
          <TitleSecond>Food not recommended</TitleSecond>
          <BoxNotRecommendedProducts notAllowedProducts={notAllowedProducts}>
            <ListNotRecommendedProducts>
              {notAllowedProducts?.length > 0 ? (
                notAllowedProducts.map((el, index) => (
                  <li key={uuidv4()}>
                    <Text>
                      {index}.{el}
                    </Text>
                  </li>
                ))
              ) : (
                <li>
                  <Text>Your diet will be displayed here</Text>
                </li>
              )}
            </ListNotRecommendedProducts>
          </BoxNotRecommendedProducts>
        </div>
      ) : (
        <>
          {' '}
          <TitleSecond>Food not recommended</TitleSecond>
          <BoxNotRecommendedProducts>
            <ListNotRecommendedProducts>
              {notAllowedProducts?.length > 0 ? (
                notAllowedProducts.map((el, index) => (
                  <li key={uuidv4()}>
                    <Text>
                      {index}.{el}
                    </Text>
                  </li>
                ))
              ) : (
                <li>
                  <Text>Your diet will be displayed here</Text>
                </li>
              )}
            </ListNotRecommendedProducts>
          </BoxNotRecommendedProducts>
        </>
      )}
    </Container>
  );
};

export default UserSummary;
