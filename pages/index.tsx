import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen text-slate-50 flex-col bg-zinc-900 items-center justify-center py-2">
      <Head>
        <title>Gawibawibo P2E LongHash Filecoin Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 py-4 text-center">
        <div className='flex items-center gap-2'>
          <Image src="/gawibawibo-logo.png" width={64} height={64} />
          <h1 className="text-4xl font-bold">
            Gawibawibo P2E LongHash Filecoin
          </h1>
        </div>

        <p className="mt-4 text-md">
          PSingle Page Presentation of the <span className='font-semibold'>Gawibawibo P2E</span> project in the Acellerator LongHash Filecoin.
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Image src="/longhash-ventures-logo.png" width={180} height={60} />
          <Image src="/filecoin-logo.png" width={146} height={43} />

        </div>

        <div className="mt-6 flex flex-col max-w-4xl border rounded-xl p-4 text-sm flex-wrap items-center gap-2 justify-around sm:w-full">
          <h1 className='text-lg font-semibold text-lime-500'>What is Gawibawibo P2E?</h1>
          <p className='w-96'>
            Gawibawibo P2E is an NFT game that implements the classic game "Rock, Paper, Scissors" or "Gawi, Bawi, Bo" as it is known in Korea.
            {" "}<Image src="/korea-icon.png" width={16} height={16} />
          </p>
        </div>

        <div className="mt-6 flex flex-col max-w-4xl border rounded-xl p-4 text-sm flex-wrap items-center gap-2 justify-around sm:w-full">
          <h1 className='text-lg font-semibold text-lime-500'>What would be a brief description about this game?</h1>
          <p className='w-96'>
            The logic of this game is quite simple but at the same time exciting.
          </p>
          <p className='w-96'>
            The options that each player has is perfectly balanced, since there are 3 possible options. And each option wins against one and loses against the other.
          </p>
          <p className='w-96'>
            In this way there is no way to know in advance who will win the game, or to generate a way of playing that is superior to another.
          </p>
          <p className='w-96'>
            This makes it a game somewhat like quantum physics or random.
            Whichever combination you choose, the result will always depend on which combination your opponent chooses.
          </p>
        </div>


        <div className="mt-6 flex flex-col max-w-4xl border rounded-xl p-4 text-sm flex-wrap items-center gap-2 justify-around sm:w-full">
          <h1 className='text-lg font-semibold text-lime-500'>What would be a high level description?</h1>
          <p className='w-96'>
            The main components of the game are:
          </p>
          <p className='w-96'>
            <span className='italic font-semibold text-lime-400'>ERC-20 Token</span>, this token will be used to distribute weekly rewards for the best players. According to your score according to moves won and time played.
          </p>
          <p className='w-96'>
            <span className='italic font-semibold text-lime-400'>ERC-721 Token</span>, this collection will implement the collection of players, called "Gawibawibowers".
          </p>
          <p className='w-96'>
            <span className='italic font-semibold text-lime-400'>MarketPlace Contract</span>, this contract will implement a system of buying and selling NFT and auctions so that players can trade their "Gawibawibower" if they wish once they have reached a certain level..
          </p>
          <p className='w-96'>
            <span className='italic font-semibold text-lime-400'>Game Contract</span>, this contract will implement the logic of the game. Where players will submit their new moves with their Gawi, Bawi, Bo combination.
          </p>
        </div>
        <div className="mt-6 flex flex-col max-w-4xl border rounded-xl p-4 text-sm flex-wrap items-center gap-2 justify-around sm:w-full">
          <h1 className='text-lg font-semibold text-lime-500'>How will the Filecoin/IPFS solution be integrated?</h1>
          <p className='w-96'>
            Filecoin/IPFS service will be used to pin up the data of each "move", such as: <span className='italic'>ownerAddress, moveOwnerHash, adversaryAddress, moveAdversaryHash, prizeAmount, moveWinnerHash, winnerAddress.</span>
          </p>
          <p className='w-96'>
            It will also be used to store the metadata of each Gawibawibower in the NFT ERC-721 collection.
          </p>
          <p className="w-96">
            Another use will be to create a ranking of the best players, JSON blockchain type. Where each Ranking update contains the hash of the previous snapshot.
          </p>
        </div>
      </main>

      <footer className="flex h-16 w-full items-center justify-center border-t">
        <div
          className="flex items-center justify-center gap-2"

        >
          <a
            href='https://github.com/en0c-026'
            target="_blank"
            className="text-xs hover:rotate-180 transition delay-500 hover:text-lime-500 hover:underline"
          >
            by enoc-026
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
