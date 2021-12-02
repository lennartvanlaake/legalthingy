import { Static, Type } from '@sinclair/typebox';

export enum SelectionOperator {
	Is,
	Includes,
}

export const selectionOperator = Type.Enum(SelectionOperator, {
	$id: 'selectionOperator',
});

export enum SelectionLocation {
	Tag,
	Class,
	Id,
}

export const selectionLocation = Type.Enum(SelectionLocation, {
	$id: 'selectionLocation',
});

export const selectionRule = Type.Object(
	{
		op: Type.Ref(selectionOperator),
		location: Type.Ref(selectionLocation),
		value: Type.String(),
	},
	{ $id: 'selectionRule' },
);

export type SelectionRule = Static<typeof selectionRule>;

export const documentRuleSet = Type.Object({
	conditionRules: Type.Array(Type.Ref(selectionRule)),
	bodyRule: Type.Optional(Type.Ref(selectionRule)),
});

export type DocumentRuleSet = Static<typeof documentRuleSet>;

export const htmlSearchRuleSet = Type.Object({
	pathWithVariables: Type.String(),
	inputVariables: Type.Array(Type.String()),
	resultBodyRule: Type.Ref(selectionRule),
	resultRule: Type.Ref(selectionRule),
	resultMetaRule: Type.Optional(Type.Ref(selectionRule)),
});

export const sourceSiteConfig = Type.Object({
	baseUrl: Type.String({ format: 'uri' }),
	name: Type.String(),
	documentRuleSets: Type.Array(Type.Ref(documentRuleSet)),
	htmlSearchRuleSet: Type.Ref(htmlSearchRuleSet),
});

export type SourceSiteConfig = Static<typeof sourceSiteConfig>;
