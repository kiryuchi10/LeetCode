import pandas as pd

import pandas as pd
from typing import List

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    result = [players.shape[0], players.shape[1]]  # No len() needed
    return result
