import React from "react";
import { AboutContainer, CoinDetail } from "../../styles/coinDetail";
import BackBtn from "../../Components/BackBtn";
import SEO from "../../Components/SEO";
import { CoinService } from "../../classes";
import Image from "next/image";


export async function getServerSideProps({ params }) {
  const coin = await CoinService.getCoin(params.id);
  return {
    props: {
      coin
    },
  };
}

export default function CryptoDetail({ coin}) {
  return (
      <main>
        <SEO name={coin.name + ' | Coin Detail'} desc={coin.name}/>
        <section id='coins-details'>
        <CoinDetail>
          <AboutContainer>
            <div className="header-text">
              <div className="box">
              <Image src={coin.image.small} alt={coin.name} width={50} height={50} />
                <p>{coin.name}</p>
                <BackBtn key={coin.id} link={'/'} />
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: coin.description.en }}
              className="text"
            ></p>
          </AboutContainer>
        </CoinDetail>
        </section>
      </main>
  );
}




