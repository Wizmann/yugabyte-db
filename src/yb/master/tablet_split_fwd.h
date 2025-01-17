// Copyright (c) YugaByte, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.  You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License
// is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
// or implied.  See the License for the specific language governing permissions and limitations
// under the License.
//

#ifndef YB_MASTER_TABLET_SPLIT_FWD_H
#define YB_MASTER_TABLET_SPLIT_FWD_H

#include "yb/util/strongly_typed_bool.h"

namespace yb {
namespace master {

class TabletSplitCandidateFilterIf;
class TabletSplitCompleteHandlerIf;
class TabletSplitDriverIf;
class TabletSplitManager;

struct SplitTabletIds;

YB_STRONGLY_TYPED_BOOL(ManualSplit);

} // namespace master
} // namespace yb

#endif // YB_MASTER_TABLET_SPLIT_FWD_H
