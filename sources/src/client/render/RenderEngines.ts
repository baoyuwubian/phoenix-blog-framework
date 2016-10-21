/**
 * Phoenix blog project.
 *
 * Copyright 2016-2016 Arno Zhang <zyfgood12@163.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {BlogRender} from "./BlogRender";
import DefHomepageRender from "./default/homepage/DefHomepageRender";
import DefPostPreviewRender from "./default/post/DefPostPreviewRender";
import DefCategoryPostRender from "./default/post/DefCategoryPostRender";


export default class RenderEngines {

    static defRender: BlogRender = {
        name: 'default',
        homepage: DefHomepageRender,
        postPreview: DefPostPreviewRender,
        categoryPost: DefCategoryPostRender
    };

/*
    static simpleRender: BlogRender = {
        name: 'simple'
    };*/

    static getRender(name: string): BlogRender {
        if (name === RenderEngines.defRender.name) {
            return RenderEngines.defRender;
        }

        return RenderEngines.defRender;
    }
}