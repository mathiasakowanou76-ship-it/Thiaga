import { Trophy, Diamond, Award } from 'lucide-react';
import type { Candidate } from '../types';

interface CandidateRowProps {
  candidate: Candidate;
  rank: number;
  maxVotes: number;
}

function CandidateRow({ candidate, rank, maxVotes }: CandidateRowProps) {
  const barWidth = maxVotes > 0 ? (candidate.votes / maxVotes) * 100 : 0;

  const getRankBadge = () => {
    if (rank === 1) {
      return (
        <div className="flex items-center gap-2 text-yellow-400 font-bold">
          <Trophy className="w-5 h-5" fill="currentColor" />
          <span>Or</span>
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <Diamond className="w-5 h-5" fill="currentColor" />
          <span>Diamant</span>
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="flex items-center gap-2 text-orange-600 font-bold">
          <Award className="w-5 h-5" fill="currentColor" />
          <span>Bronze</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative group">
      <div className="flex items-center gap-3 bg-black/40 rounded-lg p-4 border border-white/5 hover:border-white/20 transition-all duration-300">
        <div className="flex-shrink-0 w-12 text-center">
          <span className="text-xl font-bold text-white">{rank}</span>
        </div>

        {rank <= 3 && (
          <div className="flex-shrink-0 w-28">
            {getRankBadge()}
          </div>
        )}

        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-white font-medium truncate">{candidate.name}</span>
            <span className="text-white font-bold text-lg">{candidate.votes} tickets</span>
          </div>

          <div className="relative h-6 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${barWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateRow;
